export const advancedSlugify = (str) => {
    return str
        .toLowerCase()
        .normalize("NFD") // Decompose accented letters into base letter and accent
        .replace(/[\u0300-\u036f]/g, "") // Remove all accent marks
        .replace(/[^a-z0-9 -]/g, "") // Remove all non-alphanumeric characters, spaces, and hyphens
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with a single hyphen
        .replace(/-+/g, "-"); // Replace consecutive hyphens with a single hyphen
};

export const simpleSlugify = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, ""); // Trim leading and trailing hyphens
}