# POSADA TOOLS Images

## Folder structure

```
public/images/
  logo/
    posada-mark.svg          # Brand mark (SVG)
  products/
    drill-driver.svg
    impact-driver.svg
    circular-saw.svg
    battery.svg
    charger.svg
    tool-kit.svg
  banners/                   # Optional homepage banners
```

## Replace with real product photos

1. Export or download your product JPGs/PNGs.
2. Name them to match the product image paths in `src/lib/products.ts`:
   - `drill-driver.jpg`
   - `impact-driver.jpg`
   - `circular-saw.jpg`
   - `battery.jpg`
   - `charger.jpg`
   - `tool-kit.jpg`
3. Upload into `public/images/products/` (GitHub → Add file → Upload files).
4. Optionally replace `posada-mark.svg` with a final logo PNG/SVG.

After upload, redeploy on Vercel (or wait for auto-deploy).
