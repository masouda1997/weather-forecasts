const backgroundPicker = (numMin: number, numMax: number): string => {
	const randomImage =  Math.floor(
		Math.random() * (Math.floor(numMax) - Math.ceil(numMin) + 1) + Math.ceil(numMin)
	).toString();

   console.log(randomImage);
   return randomImage
};

export default backgroundPicker;
