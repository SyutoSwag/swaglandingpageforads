function appendQueryToAllLinks() {
  const currentUrl = new URL(window.location.href);

  const logoLinks = document.querySelectorAll('a');

  logoLinks.forEach((link) => {
    try {
      const targetUrl = new URL(link.href);

      currentUrl.searchParams.forEach((value, key) => {
        targetUrl.searchParams.set(key, value);
      });

      link.href = targetUrl.href;
    } catch (error) {
      console.debug('add query to logo link error', link.href, error);
    }
  });
}

appendQueryToAllLinks();
