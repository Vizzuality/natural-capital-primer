# Stage 1: Setup pnpm
FROM node:20.14.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && npm install -g corepack@latest # See: https://github.com/pnpm/pnpm/issues/9029#issuecomment-2631400936
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Stage 3: Build the application
FROM base AS build
COPY package.json pnpm-lock.yaml ./
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED=1

ARG NEXT_USE_RESTRICTIVE_ROBOTS_TXT
ENV NEXT_USE_RESTRICTIVE_ROBOTS_TXT=${NEXT_USE_RESTRICTIVE_ROBOTS_TXT}
ARG NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${NEXT_PUBLIC_DOMAIN}
ARG NEXT_PUBLIC_GA_TRACKING_ID
ENV NEXT_PUBLIC_GA_TRACKING_ID=${NEXT_PUBLIC_GA_TRACKING_ID}
ARG NEXT_PUBLIC_GTM_TRACKING_ID
ENV NEXT_PUBLIC_GTM_TRACKING_ID=${NEXT_PUBLIC_GTM_TRACKING_ID}

RUN pnpm run build

# Stage 4: Production
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

USER nextjs

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]