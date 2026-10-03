export interface NavItem {
  label: string;
  /** Id de la sección en la portada. */
  id: string;
}

export const HOME_SECTIONS: readonly NavItem[] = [
  { label: "Filosofía", id: "filosofia" },
  { label: "Compromiso", id: "promesa" },
  { label: "Servicios", id: "servicios" },
  { label: "Garantía", id: "garantia" },
  { label: "Trayectoria", id: "trayectoria" },
  { label: "Equipo", id: "equipo" },
];

export const CONTACT_PATH = "/contact";

/** En la portada el ancla es local; desde otras páginas vuelve a la portada. */
export const sectionHref = (id: string, pathname: string) =>
  pathname === "/" ? `#${id}` : `/#${id}`;
