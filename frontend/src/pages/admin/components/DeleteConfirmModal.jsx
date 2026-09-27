import React from "react";
import { AlertTriangle, X, Trash2 } from "lucide-react";
import "./DeleteConfirmModal.css";

export default function DeleteConfirmModal({ isOpen, course, onClose, onConfirm, isDeleting }) {
  if (!isOpen || !course) return null;

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div
        className="admin-delete-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="admin-modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <div className="delete-modal-icon-wrap">
          <AlertTriangle size={32} className="delete-modal-warning-icon" />
        </div>

        <h3 className="delete-modal-title">Delete Course</h3>
        <p className="delete-modal-message">
          Are you sure you want to delete{" "}
          <strong className="delete-highlight">{course.title}</strong>?
          This action will immediately remove the course from the catalog.
        </p>

        <div className="delete-modal-actions">
          <button
            type="button"
            className="delete-btn-cancel"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            className="delete-btn-confirm"
            onClick={() => onConfirm(course._id || course.id)}
            disabled={isDeleting}
          >
            <Trash2 size={16} />
            <span>{isDeleting ? "Deleting..." : "Yes, Delete Course"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
