import React, { Fragment, useEffect, useRef } from "react";
import { ProjectData } from "@/lib/data";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-heading font-bold text-gray-800">{project.title}</h3>
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div
            className="project-details"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
