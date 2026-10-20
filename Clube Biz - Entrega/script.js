const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("open", isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const form = document.querySelector("#signup-form");
const formMessage = document.querySelector("#form-message");
const consentError = document.querySelector("#consent-error");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clearFieldError(event) {
  const field = event.target;

  if (!field.matches("[required]")) {
    return;
  }

  const isChecked = field.type === "checkbox" && field.checked;
  const hasValue = Boolean(field.value.trim());
  const hasValidEmail =
    field.type !== "email" || emailPattern.test(field.value.trim());

  if (!(isChecked || (hasValue && hasValidEmail))) {
    return;
  }

  field.removeAttribute("aria-invalid");

  if (field.type === "checkbox") {
    consentError.textContent = "";
  } else {
    field.closest("label").querySelector(".field-error").textContent = "";
  }

  if (!form.querySelector('[aria-invalid="true"]')) {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }
}

form.addEventListener("input", clearFieldError);
form.addEventListener("change", clearFieldError);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;
  formMessage.textContent = "";
  formMessage.className = "form-message";
  consentError.textContent = "";

  form.querySelectorAll(".field-error").forEach((error) => {
    error.textContent = "";
  });

  form.querySelectorAll("[required]").forEach((field) => {
    let errorText = "";

    if (field.type === "checkbox" && !field.checked) {
      errorText = "Para continuar, confirme o consentimento.";
    } else if (!field.value.trim()) {
      errorText = "Preencha este campo.";
    } else if (
      field.type === "email" &&
      !emailPattern.test(field.value.trim())
    ) {
      errorText = "Informe um e-mail válido.";
    }

    if (!errorText) {
      field.removeAttribute("aria-invalid");
      return;
    }

    isValid = false;
    field.setAttribute("aria-invalid", "true");

    if (field.type === "checkbox") {
      consentError.textContent = errorText;
    } else {
      field.closest("label").querySelector(".field-error").textContent =
        errorText;
    }
  });

  if (!isValid) {
    formMessage.textContent = "Confira os campos destacados para continuar.";
    formMessage.classList.add("error");
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  formMessage.textContent =
    "Demonstração visual: o formulário está validado, mas ainda não está conectado a um banco de dados. Nenhuma informação foi enviada.";
  formMessage.classList.add("success");
});
