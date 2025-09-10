import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const getElementByXPath = (xpath) => {
  try {
    const result = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    );
    return result.singleNodeValue || null;
  } catch (_) {
    return null;
  }
};

const getFirstExistingByXPaths = (xpaths) => {
  for (const xp of xpaths) {
    const node = getElementByXPath(xp);
    if (node) return node;
  }
  return null;
};

export const MountAtXPath = ({ xpath, children }) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const xpaths = Array.isArray(xpath) ? xpath : [xpath];
    const find = () => setTarget(getFirstExistingByXPaths(xpaths));
    find();
    const id = setInterval(find, 100);
    return () => clearInterval(id);
  }, [xpath]);

  if (!target) return null;
  return createPortal(children, target);
};


