export function getPagination(currentPage, totalPages) {
  const pages = [];

  // Always first page
  pages.push(1);

  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);

  // Fix overlap with first page
  if (start === 2) start = 2;

  // Left dots
  if (start > 2) pages.push("...");

  // Middle pages
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Right dots
  if (end < totalPages - 1) pages.push("...");

  // Always last page
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}
