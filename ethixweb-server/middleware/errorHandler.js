export function notFound(req, res) {
  res.status(404).json({ ok: false, error: 'Not found' });
}

export function errorHandler(err, req, res, _next) {
  console.error('[error]', err.message);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'Invalid JSON body' });
  }
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ ok: false, error: 'Payload too large' });
  }
  if (err.name === 'ValidationError') {
    const fields = {};
    for (const [k, v] of Object.entries(err.errors || {})) {
      fields[k] = [v.message];
    }
    return res.status(400).json({ ok: false, error: 'Validation failed', fields });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ ok: false, error: 'Invalid id format' });
  }

  return res.status(500).json({ ok: false, error: 'Something went wrong' });
}