on('onResourceStart', (resourceName: string) => {
    if (GetCurrentResourceName() !== resourceName) return;
    
    console.log(`[${resourceName}] Resource started`);
}); 