#!/usr/bin/env node
import inquirer from "inquirer";
console.log("\tWelcome To Word Counter\t");
let text = await inquirer.prompt([{message: "Enter The Text : ", name: "lines",type:"input"}]);
text.lines = text.lines.trim();
let para = text.lines.replaceAll(" ",",");
let para_changed  = para.split(",");
console.log("Words Count = ", para_changed.length);
let para_changed_ = para.replaceAll(",","");
let para_length = para_changed_.length;
console.log("The Characters In The Given Input Is = ",para_length);