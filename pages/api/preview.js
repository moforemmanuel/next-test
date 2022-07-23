export default function handler(req, res) {
  res.setPreviewData({ user: 'Manuel' }); //access in gSP by context.previewData
  res.end('Preview mode enabled');
  res.redirect(req.query.redirect);
}
