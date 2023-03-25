
export const cls = (classes: Record<string, boolean>) => {
    return Object.keys(classes).filter(klass => classes[klass]).join(" ")
}
