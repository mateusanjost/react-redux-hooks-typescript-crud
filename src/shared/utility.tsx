export const updateObject = (oldObject: { name: string; type: string; createdAt: string; histories: any[]; }, updatedProperties: { createdAt?: string; histories?: any; dragons?: any; loading?: boolean; wasUpdate?: any; error?: any; isLoggedIn?: boolean; successMessage?: any; wasCreated?: any; }) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}


export const sortList = (list: any[]) => {
  return list.sort((dragonA: { name: any; }, dragonB: { name: any; })=> {
      let currentDragon = dragonA.name;
      let nextDragon = dragonB.name;
      if (currentDragon < nextDragon) {
          return -1;
      }
      if (currentDragon > nextDragon) {
          return 1;
      }
      return 0;
  })
}