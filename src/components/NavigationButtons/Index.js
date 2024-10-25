import React from "react";
import { Link } from "wouter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const NavigationButtons = ({ prevRoute, nextRoute }) => {
  return (
    <div className="navigation-buttons">
      {prevRoute && (
        <Link to={prevRoute}>
          <button className="prev-button">
            <FaChevronLeft /> {/* Icono de flecha izquierda */}
          </button>
        </Link>
      )}
      {nextRoute && (
        <Link to={nextRoute}>
          <button className="next-button">
            <FaChevronRight /> {/* Icono de flecha derecha */}
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavigationButtons;