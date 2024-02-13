import { pool } from "../db.js";


export const createInsidencia = async (req, res, next) => {
  try {
    const { usuario_id, ubicacion,tipo,descripcion,estado, fecha_reporte,imagen } = req.body;

    const newIncidencia = await pool.query(
      `INSERT INTO incidencias (usuario_id, ubicacion, tipo, descripcion, estado, fecha_reporte, imagen) VALUES($1, $2, $3, $4, $5,$6  $7,$8) RETURNING *`,
      [usuario_id, ubicacion, tipo, descripcion, estado, fecha_reporte , imagen]
    );
    console.log(req.body)

    res.json(newIncidencia.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const getAllIncidencias = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM incidencias ");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

export const incidenciasFilter = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, fecha_reporte } = req.body;
    const result = await pool.query("SELECT * FROM incidencias WHERE estado = $1", [estado ]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateIncidencias = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario_id, ubicacion,tipo,descripcion,estado,fecha_reporte } = req.body;

    const result = await pool.query(
      "UPDATE incidencias SET usuario_id = $1, ubicacion = $2, tipo = $3, descripcion = $4 , estado = $5 , fecha_reporte = $6 WHERE , imagen = $7,id = $8 RETURNING *",
      [usuario_id, ubicacion, tipo, descripcion, estado, fecha_reporte,imagen , id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteIncidencias = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM incidencias WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};



