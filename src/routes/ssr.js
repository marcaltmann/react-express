import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
    const theHtml = `
    <!DOCTYPE html>
    <html>
        <head><title>My First SSR</title></head>
        <body>
            <h1>My First Server Side Render</h1>
            <div id="reactele">{{{reactele}}}</div>
            <script src="/app.js" charset="utf-8"></script>
            <script src="/vendor.js" charset="utf-8"></script>
        </body>
    </html>`;

    res.setHeader('Cache-Control', 'max-age=5000');
    res.status(200);
    res.send(theHtml);
});

export default router;
