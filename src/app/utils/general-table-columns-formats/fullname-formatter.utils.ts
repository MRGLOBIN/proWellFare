export const FullNameFormat =
  (firstName: string, LastName: string) => (data: any) =>
    data[firstName] || data[LastName]
      ? `${data[firstName] || ''} ${data[LastName] || ''}`.trim()
      : '--'
