require("datejs");

// Create a combineUsers function:
// Initialize return object
// Inside combineUsers, define the variable combinedObject (object).
// Initialize with a key of users with the value []
function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  // Loop through args to isolate each array
  // Merge arrays
  // Using a spread operator, merge arrays into the users attribute of combinedObject
  for (let array of args) {
    combinedObject.users.push(...array);
  }

  // Get today's date
  // Add an attribute to combinedObject called merge_date and, using datejs, give it the current date
  // In datejs, give it the format of M/d/yyyy
  // Return object
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
  

const userNames = ["Ogaso", "Githinji", "Belinda", "Valentine"];
const moreUserNames = ["John", "Mike", "Brian"];

const result = combineUsers(userNames, moreUserNames);

console.log(userNames);
console.log(moreUserNames);
console.log("Merged users:", result.users);
console.log("Merge date:", result.merge_date);


