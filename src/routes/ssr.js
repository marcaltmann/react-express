import express from "express";
import prettier from 'prettier';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';

import App from '../components/app';

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

    const hbsTemplate = hbs.compile(theHtml);
    const reactComp = renderToString(<App />);
    const htmlToSend = hbsTemplate({ reactele: reactComp });

    res.setHeader('Cache-Control', 'max-age=5000');
    res.status(200);
    res.send(prettier.format(htmlToSend, { parser: 'html' }));
});

export default router;
