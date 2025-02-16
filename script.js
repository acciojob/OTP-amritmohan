//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Allow only single-digit numbers
      if (!/^\d$/.test(value)) {
        e.target.value = "";
        return;
      }

      // Move to the next input if there's a value
      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        // Move to the previous input and clear its value
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    });

    // Ensure first input is focused initially
    if (index === 0) {
      input.focus();
    }
  });
});
