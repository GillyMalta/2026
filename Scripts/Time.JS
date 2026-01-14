    setInterval(() => {
      const now = new Date();

      const day = now.toLocaleDateString("en-GB", { weekday: "long" });
      const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long"
      });
      const time = now.toLocaleTimeString("en-GB", { hour12: false });

      output.innerText = `${day}, ${date} - ${time}`;
    }, 1000);

