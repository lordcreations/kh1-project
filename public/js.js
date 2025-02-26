document.addEventListener("DOMContentLoaded", () => {

    
    if (localStorage.getItem("choice")) {
        question.classList.add("hidden");
        scene.classList.remove("hidden");
        return;
    }
    
    const duration = 3;
    const items = document.querySelectorAll(".animate");
    const flashEffect = document.getElementById("flash-in");
    const flashOut = document.getElementById("flash-out");
    items.forEach((item) => {
      const randomDelay = -(Math.random() * duration);
      item.style.animationDelay = `${randomDelay}s`;

      item.addEventListener("click", () => {
            dialog.classList.remove("hidden");
        });
    });


    const options = document.querySelectorAll(".option");
    const selector = document.getElementById("selector");

    options.forEach((option, index) => {
        option.addEventListener("mouseover", () => {
            const newPosition = index * 40;
            selector.style.transform = `translateY(${newPosition}px)`;
        });
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
          console.log(option.dataset.index);
          if (option.dataset.index === "0") {
              dialog.classList.add("hidden");
              console.log(option.dataset.index);
              flashEffect.classList.remove("hidden");
              flashEffect.classList.add("fade-in");

              localStorage.setItem("choice", "true");
              
              setTimeout(() => {
                  document.getElementById("scene").classList.remove("hidden");
                  flashEffect.classList.add("fade-out");
                  document.getElementById("question").classList.add("hidden");
              }, 4000);

          } else {
            dialog.classList.add("hidden");
          }

        });
    });

});
