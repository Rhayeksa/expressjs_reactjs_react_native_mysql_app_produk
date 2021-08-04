exports.getPagination = (page, size) => {
  const limit = size ? Number(size) : 5;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
exports.getPagingData = (data, page, limit) => {
  const { count: totals, rows: datas } = data;
  const currentPage = page ? Number(page) : 0;
  const totalPages = Math.ceil(totals / limit);
  return { datas, totals, totalPages, currentPage };
};
