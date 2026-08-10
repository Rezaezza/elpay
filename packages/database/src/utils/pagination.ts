export interface PaginationInput {
  page?: number;
  limit?: number;
}

export function paginate({
  page = 1,
  limit = 20,
}: PaginationInput) {
  const take = Math.max(limit, 1);

  const skip = (Math.max(page, 1) - 1) * take;

  return {
    take,
    skip,
  };
}