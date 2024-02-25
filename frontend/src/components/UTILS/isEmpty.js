export const isEmpty = (value) => { // Définition de la fonction isEmpty prenant une valeur en paramètre
  return (
      value === undefined || // Vérifie si la valeur est indéfinie
      value === null || // Vérifie si la valeur est nulle
      (typeof value === "object" && Object.keys(value).length === 0) || // Vérifie si la valeur est un objet vide
      (typeof value === "string" && value.trim().length === 0) // Vérifie si la valeur est une chaîne vide (après suppression des espaces vides)
  );
};
