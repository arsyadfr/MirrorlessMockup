    async function loadPage(page) {
      const res = await fetch(`pages/${page}.html`);
      const html = await res.text();
      document.getElementById('content').innerHTML = html;
    }
