//TICKET PRICING FOR DIFFENT AGE GROUPS

var age = prompt("Enter your age:");

function getTicketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

console.log("Ticket price: $" + getTicketPrice(parseInt(age)));
