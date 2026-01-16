import React, {useState} from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Download} from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    // This function runs once the PDF is loaded successfully
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Ziyan_resume.pdf</h2>
                <a href="files/resume.pdf" download className="cursor-pointer" title="Download Resume">
                    <Download className="icon"/>
                </a>
            </div>

            <div className="resume-viewer-container" style={{ overflowY: 'auto', height: '100%' }}>
                <Document
                    file="files/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {/* Create an array based on numPages and map through it */}
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer
                            renderAnnotationLayer
                            className="mb-4" // Add spacing between pages
                        />
                    ))}
                </Document>
            </div>
        </>
    );
}
const ResumeWindow=WindowWrapper(Resume, "resume");
export default ResumeWindow
