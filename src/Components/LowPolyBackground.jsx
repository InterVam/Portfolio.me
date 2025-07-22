import React, { useEffect, useRef } from 'react';
import '../Style/lowPolyBackground.css';

const LowPolyBackground = () => {
    const svgRef = useRef(null);
    
    useEffect(() => {
        const generatePolygons = () => {
            const svg = svgRef.current;
            if (!svg) return;
            
            // Clear existing polygons
            while (svg.firstChild) {
                svg.removeChild(svg.firstChild);
            }
            
            const width = window.innerWidth;
            const height = window.innerHeight * 2.5; // Extend to cover scrolling
            
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
            
            // Grid settings
            const cellSize = 120;
            const variability = 40;
            
            // Calculate grid dimensions
            const cols = Math.ceil(width / cellSize) + 1;
            const rows = Math.ceil(height / cellSize) + 1;
            
            // Create grid points
            const points = [];
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const baseX = x * cellSize;
                    const baseY = y * cellSize;
                    
                    const pointX = baseX + (Math.random() * variability * 2 - variability);
                    const pointY = baseY + (Math.random() * variability * 2 - variability);
                    
                    points.push({ x: pointX, y: pointY });
                }
            }
            
            // Create triangles with varying patterns
            for (let y = 0; y < rows - 1; y++) {
                for (let x = 0; x < cols - 1; x++) {
                    const topLeft = y * cols + x;
                    const topRight = y * cols + x + 1;
                    const bottomLeft = (y + 1) * cols + x;
                    const bottomRight = (y + 1) * cols + x + 1;
                    
                    // Randomly choose triangle configuration
                    const pattern = Math.floor(Math.random() * 3);
                    
                    if (pattern === 0) {
                        createTriangle(points[topLeft], points[bottomLeft], points[topRight], svg, x, y);
                        createTriangle(points[bottomLeft], points[bottomRight], points[topRight], svg, x, y);
                    } else if (pattern === 1) {
                        createTriangle(points[topLeft], points[bottomLeft], points[bottomRight], svg, x, y);
                        createTriangle(points[topLeft], points[bottomRight], points[topRight], svg, x, y);
                    } else {
                        // Create a quad occasionally for variety
                        createQuad(points[topLeft], points[topRight], points[bottomRight], points[bottomLeft], svg, x, y);
                    }
                }
            }
        };
        
        const createTriangle = (p1, p2, p3, svg, x, y) => {
            const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            
            polygon.setAttribute('points', `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`);
            
            stylePolygon(polygon, x, y);
            svg.appendChild(polygon);
        };
        
        const createQuad = (p1, p2, p3, p4, svg, x, y) => {
            const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            
            polygon.setAttribute('points', `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`);
            
            stylePolygon(polygon, x, y);
            svg.appendChild(polygon);
        };
        
        const stylePolygon = (polygon, x, y) => {
            // Create patterns for gold highlights
            const positionFactor = (x + y) % 12;
            const goldChance = positionFactor === 0 ? 0.3 : 
                              positionFactor === 1 ? 0.15 : 
                              0.05;
            
            const isGold = Math.random() < goldChance;
            
            if (isGold) {
                polygon.setAttribute('class', 'poly-gold');
                // Staggered animation delays for wave effect
                const animationDelay = ((x * 0.2 + y * 0.3) % 6).toFixed(1);
                polygon.style.setProperty('--animation-delay', animationDelay);
            } else {
                // Different shades of gray
                const shade = Math.floor(Math.random() * 4);
                polygon.setAttribute('class', `poly-gray-${shade}`);
            }
        };
        
        // Generate polygons after loading animation
        setTimeout(() => {
            generatePolygons();
        }, 2500);
        
        // Regenerate on resize
        const handleResize = () => {
            setTimeout(() => {
                generatePolygons();
            }, 100);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <div className="low-poly-background">
            <svg 
                ref={svgRef} 
                xmlns="http://www.w3.org/2000/svg"
                className="low-poly-svg"
            />
        </div>
    );
};

export default LowPolyBackground; 