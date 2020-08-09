import React from "react";

export const ExternalLink: React.FC<React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>> = ({ ...props }) => <a rel="external noopener" target="_blank" {...props} />;
