# Required Video Assets for Eco Green Solar

Place the following loop video files in this folder (`/public/videos/`).

| File Name | Resolution | Codec | Audio | Max Size | Duration | Purpose |
|---|---|---|---|---|---|---|
| `hero.mp4` | 1080p (1920x1080) | H.264 (MP4) | None (Muted) | < 5 MB | 8–15s loop | Hero background dawn atmosphere & solar array glance |
| `sunrise.mp4` | 1080p (1920x1080) | H.264 (MP4) | None (Muted) | < 5 MB | 8–15s loop | Sun rising / dawn horizon color gradient for Section 2 |
| `installation.mp4` | 1080p (1920x1080) | H.264 (MP4) | None (Muted) | < 5 MB | 8–15s loop | High-end technical rooftop installation framing for Section 3 |
| `energy.mp4` | 1080p (1920x1080) | H.264 (MP4) | None (Muted) | < 5 MB | 8–15s loop | Subtle glowing energy pulse texture for Section 4 |

### Notes:
- If a video file is absent or fails to load, `VideoBackground` will automatically fall back to an animated, high-performance CSS gradient background with zero layout shift or errors.
- Always encode videos using `ffmpeg -i input.mp4 -vcodec libx264 -crf 26 -an -movflags +faststart output.mp4`.
