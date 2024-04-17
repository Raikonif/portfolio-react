import React, { useState } from "react";

function Modal(isOpen: boolean) {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6"></div>
      <ul>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
      </ul>
    </div>
  );
}

export default Modal;
