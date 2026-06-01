(() => {
  const logoPath = "/assets/img/logo.png";
  const isAboutPage = window.location.pathname === "/";
  const navbarContainer = document.querySelector("#navbar .container");

  if (!navbarContainer) return;

  const createLogo = (className, alt) => {
    const logo = document.createElement("img");
    logo.className = className;
    logo.src = logoPath;
    logo.alt = alt;
    return logo;
  };

  if (isAboutPage) {
    const navbarBrand = document.createElement("a");
    navbarBrand.className = "navbar-brand site-brand site-brand-logo-only";
    navbarBrand.href = "/";
    navbarBrand.setAttribute("aria-label", "Jacob Jerry Arackal home");
    navbarBrand.append(createLogo("site-brand-logo", "Jacob Jerry Arackal logo"));
    navbarContainer.prepend(navbarBrand);

    const aboutTitle = document.querySelector(".post-header .post-title");
    if (aboutTitle) {
      aboutTitle.classList.add("about-brand-title");
      aboutTitle.replaceChildren(createLogo("about-brand-logo", "Jacob Jerry Arackal"));
    }
  } else {
    const navbarBrand = navbarContainer.querySelector(".navbar-brand.title");
    if (navbarBrand) {
      navbarBrand.classList.add("site-brand");
      navbarBrand.prepend(createLogo("site-brand-logo", ""));
    }
  }

  const styles = document.createElement("style");
  styles.textContent = `
    .site-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
    }

    .site-brand-logo {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 0 0 1px var(--global-divider-color);
    }

    .site-brand-logo-only {
      margin-right: 1rem;
      padding-block: 0.15rem;
    }

    .about-brand-title {
      margin-bottom: 1.1rem;
    }

    .about-brand-logo {
      width: clamp(8rem, 20vw, 11rem);
      height: auto;
      border-radius: 50%;
      box-shadow: 0 0 0 1px var(--global-divider-color), 0 0.75rem 2rem rgb(0 0 0 / 16%);
    }

    .profile {
      width: min(100%, 22rem);
      margin-bottom: 1.25rem;
    }

    .profile img {
      border: 1px solid var(--global-divider-color);
      border-radius: 1rem;
      box-shadow: 0 0.9rem 2.2rem rgb(0 0 0 / 18%);
    }

    .profile .more-info {
      margin-top: 0.75rem;
      text-align: center;
    }

    @media (min-width: 576px) {
      .profile {
        width: 38%;
      }
    }

    @media (max-width: 575.98px) {
      .site-brand-logo {
        width: 1.8rem;
        height: 1.8rem;
      }

      .profile {
        float: none;
        margin-inline: auto;
      }
    }
  `;
  document.head.append(styles);
})();
