function toogleTheme() {
  const body = document.body;
  body.classList.toggle('light');
}

function showAccordion(accordionId) {
  const accordionDivs = Array.from(document.querySelectorAll(".accordion-pannel"))

  if (accordionDivs.length > 0) {
    const accordionDiv = accordionDivs[accordionId - 1]
    console.log(accordionDiv)

    if (accordionDiv.style.maxHeight) {
      accordionDiv.style.maxHeight = null;
    } else {
      accordionDiv.style.maxHeight = (accordionDiv.scrollHeight + 32) + "px";
    }

    accordionDiv.classList.toggle("active")
  }
}