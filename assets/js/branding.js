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
    const aboutTitle = document.querySelector(".post-header .post-title");
    if (aboutTitle) {
      aboutTitle.classList.add("about-brand-heading");
      aboutTitle.innerHTML = '<span class="font-weight-bold">Jacob Jerry Arackal</span><span class="about-role"> - AI Engineer</span>';
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
      width: 2.7rem;
      height: 2.7rem;
      object-fit: cover;
    }

    .about-brand-heading {
      margin-bottom: 1.25rem;
    }

    .about-role {
      font-weight: 300;
    }

    .profile {
      width: min(100%, 24rem);
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
        width: min(44%, 24rem);
      }
    }

    @media (max-width: 575.98px) {
      .site-brand-logo {
        width: 2.35rem;
        height: 2.35rem;
      }

      .profile {
        float: none;
        margin-inline: auto;
      }
    }
  `;
  document.head.append(styles);
})();
