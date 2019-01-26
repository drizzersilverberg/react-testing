function mapChooser(locationName){
  if (locationName === undefined) {
    locationName = 'default';
  }
  let imageName = locationName + '.jpg';
  return imageName;
}

export default mapChooser;