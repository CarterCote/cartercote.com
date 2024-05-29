"use client";

import React from 'react';
import posthog from 'posthog-js';

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

interface InteractiveLinkProps {
  href: string;
  children: React.ReactNode;
  event: string;
  underline?: boolean;
  newTab?: boolean;
}

// This is a Client Component
export default function InteractiveLink({ href, children, event, underline = false, newTab = false }: InteractiveLinkProps) {
  const linkStyle = {
    textDecoration: underline ? 'underline' : 'none'
  };

  const linkAttributes = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} {...linkAttributes} style={linkStyle} onClick={() => posthog.capture(event)}>
      {children}
    </a>
  );
}