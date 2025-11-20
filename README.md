# 3D Mesh Spirals

A 3D mesh spiral generator with interactive controls and export capabilities.

🌐 **Live Demo:** [https://philosophercode.github.io/3d_mesh_spirals/](https://philosophercode.github.io/3d_mesh_spirals/)

## GitHub Pages Deployment

This project is set up to deploy to GitHub Pages automatically via GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push to trigger deployment:**
   - The workflow will automatically run when you push to the `main` branch
   - You can also manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

3. **Access your site:**
   - After deployment completes, your site will be available at:
     [https://philosophercode.github.io/3d_mesh_spirals/](https://philosophercode.github.io/3d_mesh_spirals/)
   - The deployment status can be checked in the **Actions** tab

### Manual Deployment

If you prefer to deploy manually or test locally:

```bash
# Serve locally (requires Python)
cd v0.5
python -m http.server 8000
# Then visit http://localhost:8000
```

## Project Structure

- `v0.5/` - Current version (plain HTML/JS, no build step required). Includes the new geometry mode toggle so you can switch between parametric tubes (spirals, helices, etc.) and editable primitive shapes such as spheres, cubes, pentagonal/decagonal prisms, discs, and dodecahedrons. Primitive shapes support real-time twist, taper, bend, noise, and inflate deformations directly in the UI.
- `v0.1/`, `v0.2/` - Previous versions with build systems
