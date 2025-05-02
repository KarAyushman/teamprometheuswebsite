/**
 * Download Team Images Utility Script
 * 
 * This script provides instructions to download the team member images from Google Drive
 * and place them in the assets/teamImages folder.
 * 
 * Usage:
 * 1. Run this file using Node.js: node src/downloadTeamImages.js
 * 2. The script will output the team member names and their corresponding Google Drive links
 * 3. Manually download each image and save it with the filename shown in the console
 */

import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadTeamImages() {
  try {
    // Create teamImages directory if it doesn't exist
    const imageDir = path.join(__dirname, 'assets', 'teamImages');
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
      console.log(`Created directory: ${imageDir}`);
    }

    // Read the Excel file
    const excelPath = path.join(__dirname, 'team_details.xlsx');
    const excelData = fs.readFileSync(excelPath);
    const workbook = XLSX.read(excelData, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log('\nTeam Member Images to Download:');
    console.log('==============================\n');

    jsonData.forEach((member, index) => {
      if (member.Photo) {
        const imageName = member.Name ? member.Name.toLowerCase().replace(/\s+/g, '-') : `member-${index+1}`;
        const fileName = `${imageName}.jpg`;
        const filePath = path.join(imageDir, fileName);
        
        console.log(`${index + 1}. ${member.Name}`);
        console.log(`   Drive Link: ${member.Photo}`);
        console.log(`   Save as: ${fileName}`);
        console.log(`   Full path: ${filePath}`);
        console.log('');
      }
    });

    console.log('\nInstructions:');
    console.log('1. For each team member, open the Google Drive link in your browser');
    console.log('2. Download the image');
    console.log('3. Rename it according to the "Save as" name shown above');
    console.log('4. Place it in the src/assets/teamImages directory');
    console.log('\nOnce done, the Team page will display local images instead of fetching from Google Drive.');

  } catch (error) {
    console.error('Error:', error);
  }
}

downloadTeamImages(); 