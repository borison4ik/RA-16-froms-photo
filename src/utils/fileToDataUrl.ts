export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (evt: ProgressEvent<FileReader>) => {
      if (evt.target?.result) {
        const result: string = String(evt.target?.result);
        resolve(result);
      }
    });

    fileReader.addEventListener('error', (evt: ProgressEvent<FileReader>) => {
      reject(new Error('err'));
    });

    fileReader.readAsDataURL(file);
  });
};
