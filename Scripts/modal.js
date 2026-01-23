document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("tester");
  modal.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.close();
  });
});
