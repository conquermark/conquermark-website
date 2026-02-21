import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc?: string;
  videoUrl?: string;
  title?: string;
  caption?: string;
}

export default function VideoLightbox({
  open,
  onOpenChange,
  videoSrc,
  videoUrl,
  title,
  caption
}: VideoLightboxProps) {
  const isYouTube = videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'));
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-white" />
        </button>
        
        <div className="relative aspect-video">
          {isYouTube || videoUrl ? (
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        {(title || caption) && (
          <div className="p-6 bg-background">
            {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
            {caption && <p className="text-foreground/70">{caption}</p>}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
