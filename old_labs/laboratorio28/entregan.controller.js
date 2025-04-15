const db = require('./bdlab28');

exports.registrarEntrega = async (req, res) => {
  const { Clave, RFC, Numero, Fecha, Cantidad } = req.body;

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(`
      INSERT INTO entregan (Clave, RFC, Numero, Fecha, Cantidad)
      VALUES (?, ?, ?, ?, ?)`,
      [Clave, RFC, Numero, Fecha, Cantidad]
    );

    await conn.commit();
    res.send('Entrega registrada con éxito');
  } catch (error) {
    await conn.rollback();
    console.error('Error:', error);
    res.status(500).send('Error al registrar entrega');
  } finally {
    conn.release();
  }
};
