import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
}

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    document.title = title;
    setMetaTag("description", description);

    return () => {
      document.title = previousTitle;
      if (previousDescription) setMetaTag("description", previousDescription);
    };
  }, [title, description]);
}
