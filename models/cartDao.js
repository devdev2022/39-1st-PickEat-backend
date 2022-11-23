const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const getCartByUserId = async (userId) => {
  try {
    return await database.query(
      `SELECT
          C.id,
          C.product_id,
          C.quantity,
          P.title,
          P.thumbnail_image_url
        FROM
          carts C
        LEFT JOIN
          products P
        ON
          P.id = C.product_id
        WHERE
          C.user_id = ?
        `,
      [userId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { getCartByUserId };