import { config } from "../../../site.config";
import { ContentWrapper } from "./ContentWrapper";

export const Footer: React.FC = () => (
  <footer className="mt-20 py-4 border-t text-center text-[0.9rem]">
    <ContentWrapper>
      <p>© {config.siteMeta.teamName}</p>
    </ContentWrapper>
  </footer>
);