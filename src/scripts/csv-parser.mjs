import fs from "fs/promises";
import { createReadStream } from "fs";
import path from "path";
import csv from "csv-parser";

const convertToNumberIfPossible = (value) => {
  if (typeof value !== "string") return value;

  const trimmed = value.trim();

  // Check if it's a valid number
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    const floatValue = parseFloat(trimmed);
    return Number.isInteger(floatValue) ? parseInt(trimmed, 10) : floatValue;
  }

  return value;
};

const transposeData = (data) => {
  const keys = Object.keys(data[0]);
  const transposed = {};
  keys.forEach((key) => {
    transposed[key] = data.map((item) => convertToNumberIfPossible(item[key]));
  });
  return transposed;
};

const csvToJson = async (filePath, shouldTranspose = false) => {
  const jsonFilePath = filePath.replace(".csv", ".json");
  const results = [];

  return new Promise((resolve, reject) => {
    createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        const convertedData = Object.fromEntries(
          Object.entries(data).map(([key, value]) => [key, convertToNumberIfPossible(value)]),
        );
        results.push(convertedData);
      })
      .on("end", async () => {
        try {
          const finalData = shouldTranspose ? transposeData(results) : results;
          await fs.writeFile(jsonFilePath, JSON.stringify(finalData, null, 2));
          console.log(`JSON file created: ${jsonFilePath}`);
          resolve();
        } catch (error) {
          reject(error);
        }
      })
      .on("error", reject);
  });
};

// Main function to be called when script is run directly
async function main() {
  const args = process.argv.slice(2);
  const csvFilePath = args[0];
  const shouldTranspose = args.includes("--transpose");

  if (!csvFilePath) {
    console.error("Please provide a CSV file path");
    process.exit(1);
  }

  try {
    await csvToJson(path.resolve(csvFilePath), shouldTranspose);
    console.log("Conversion completed successfully");
  } catch (error) {
    console.error("Error during conversion:", error);
    process.exit(1);
  }
}

// Run the main function if this module is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default csvToJson;
