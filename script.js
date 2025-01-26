function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  if (!day || !month || !year) {
    document.getElementById("result").textContent =
      "Please fill in all fields.";
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age >= 0) {
    document.getElementById("result").textContent = `You are ${age} years old.`;
  } else {
    document.getElementById("result").textContent = "Invalid date of birth.";
  }
}
