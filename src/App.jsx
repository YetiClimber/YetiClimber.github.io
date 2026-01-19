import { useState, useEffect } from "react";
const birdMeme = 'data:image/jpeg;base64,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';

function App() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [newNotes, setNewNotes] = useState("");
  const [newBirdName, setNewBirdName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [editedNotes, setEditedNotes] = useState("");
  const [editedBirdName, setEditedBirdName] = useState("");
  const [editedLocation, setEditedLocation] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saveError, setSaveError] = useState(false);
  const [previousEntriesCount, setPreviousEntriesCount] = useState(0);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const saved = localStorage.getItem('birdJournalEntries');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setEntries(parsed);
        setPreviousEntriesCount(parsed.length);
      } catch (error) {
        console.log('Error loading entries');
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && entries.length > 0) {
      try {
        const dataToSave = JSON.stringify(entries);
        localStorage.setItem('birdJournalEntries', dataToSave);
        setSaveError(false);
        setPreviousEntriesCount(entries.length);
      } catch (error) {
        if (error.name === 'QuotaExceededError') {
          if (entries.length !== previousEntriesCount) {
            setSaveError(true);
            alert('You have reached the storage limit! Your last change was not saved. Please delete some entries to free up space.');
            const saved = localStorage.getItem('birdJournalEntries');
            if (saved) {
              setEntries(JSON.parse(saved));
            }
          }
        } else {
          console.error('Error saving entries:', error);
        }
      }
    }
  }, [entries, isLoading, previousEntriesCount]);

  const handleImageUpload = () => {
    if (!newImage) return;
    setShowModal(false);
    setShowDetailsModal(true);
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleSaveEntry = () => {
    const newEntry = {
      id: Date.now(),
      image: newImage,
      notes: newNotes,
      birdName: newBirdName || "No Name",
      location: location || "No Location",
      date: date
    };

    setEntries([newEntry, ...entries]);
    setNewImage(null);
    setNewNotes("");
    setNewBirdName("");
    setLocation("");
    setDate("");
    setShowDetailsModal(false);
  };

  const getSortedEntries = () => {
    const entriesCopy = [...entries];
    
    switch(sortBy) {
      case 'date':
        return entriesCopy.sort((a, b) => {
          const dateA = a.date ? new Date(a.date) : new Date(a.id);
          const dateB = b.date ? new Date(b.date) : new Date(b.id);
          return dateB - dateA;
        });
      case 'name':
        return entriesCopy.sort((a, b) => {
          const nameA = (a.birdName || '').toLowerCase();
          const nameB = (b.birdName || '').toLowerCase();
          if (!nameA && !nameB) return 0;
          if (!nameA) return 1;
          if (!nameB) return -1;
          return nameA.localeCompare(nameB);
        });
      case 'location':
        return entriesCopy.sort((a, b) => {
          const locA = (a.location || '').toLowerCase();
          const locB = (b.location || '').toLowerCase();
          if (!locA && !locB) return 0;
          if (!locA) return 1;
          if (!locB) return -1;
          return locA.localeCompare(locB);
        });
      default:
        return entriesCopy;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Bird Journal</h1>
        <p style={subtitleStyle}> Number of sightings: {entries.length} </p>
      </div>



      {isLoading ? (
        <div style={loadingStyle}>Loading...</div>
      ) : entries.length === 0 ? (
        <div style={emptyStateStyle}>
          <img style={emptyIconStyle} src={birdMeme} alt="Sad Bird" />
          <p style={emptyTextStyle}>No sightings yet. Log your first bird! </p>
        </div>
      ) : (
        <>
          <div style={sortControlsStyle}>
            <div style={sortLabelStyle}>Sort by:</div>
            <div style={sortButtonsStyle}>
              <button
                style={{...sortButtonStyle, ...(sortBy === 'date' ? activeSortButtonStyle : {})}}
                onClick={() => setSortBy('date')}
              >
                Date
              </button>
              <button
                style={{...sortButtonStyle, ...(sortBy === 'name' ? activeSortButtonStyle : {})}}
                onClick={() => setSortBy('name')}
              >
                Name
              </button>
              <button
                style={{...sortButtonStyle, ...(sortBy === 'location' ? activeSortButtonStyle : {})}}
                onClick={() => setSortBy('location')}
              >
                Location
              </button>
            </div>
          </div>
          <div style={gridStyle}>
            {getSortedEntries().map(entry => (
              <div
                key={entry.id}
                style={cardStyle}
                onClick={() => {
                  setShowModal(false);
                  setShowDetailsModal(false);
                  setSelectedEntry(entry);
                  setEditedNotes(entry.notes || "");
                  setEditedBirdName(entry.birdName || "No Name");
                  setEditedLocation(entry.location || "No Location");
                  setEditedDate(entry.date || "");
                }}
              >
                <div style={imageWrapperStyle}>
                  <img
                    src={entry.image}
                    alt="Bird sighting"
                    style={imageStyle}
                  />
                  <div style={gradientOverlayStyle}></div>
                </div>
                <div style={cardContentStyle}>
                  {entry.birdName && (
                    <div style={birdNameStyle}>
                      {entry.birdName}
                    </div>
                  )}
                  {entry.location && (
                    <div style={locationStyle}>
                      {entry.location}
                    </div>
                  )}
                  {entry.notes && (
                    <div style={previewNotesStyle}>
                      {entry.notes.substring(0, 60)}
                      {entry.notes.length > 60 ? '...' : ''}
                    </div>
                  )}
                </div>
                <div style={dateBadgeStyle}>
                  {entry.date ? new Date(entry.date + 'T00:00:00').toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  }) : new Date(entry.id).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showModal && (
        <div style={overlayStyle} onClick={() => setShowModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Bird name..."
              value={newBirdName}
              onChange={(e) => setNewBirdName(e.target.value)}
              style={birdNameInputStyle}
            />

            <div style={uploadAreaStyle}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      const img = new Image();
                      img.onload = () => {
                        const canvas = document.createElement('canvas');
                        let width = img.width;
                        let height = img.height;
                        
                        const maxDimension = 1200;
                        if (width > maxDimension || height > maxDimension) {
                          if (width > height) {
                            height = (height / width) * maxDimension;
                            width = maxDimension;
                          } else {
                            width = (width / height) * maxDimension;
                            height = maxDimension;
                          }
                        }
                        
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, width, height);
                        
                        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
                        setNewImage(compressedDataUrl);
                      };
                      img.src = reader.result;
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                style={fileInputStyle}
                id="imageUpload"
              />
              <label htmlFor="imageUpload" style={uploadLabelStyle}>
                {newImage ? (
                  <img src={newImage} alt="Preview" style={previewImageStyle} />
                ) : (
                  <div style={uploadPlaceholderStyle}>
                    <div style={uploadIconStyle}> </div>
                    <div>Click to upload bird photo</div>
                  </div>
                )}
              </label>
            </div>

            <textarea
              placeholder="Notes about the bird..."
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              style={textareaStyle}
            />

            <div style={modalButtonsStyle}>
              <button
                style={{...buttonStyle, ...cancelButtonStyle}}
                onClick={() => {
                  setNewImage(null);
                  setNewNotes("");
                  setNewBirdName("");
                  setShowModal(false);
                }}
              >
                Cancel
              </button>
              <button
                style={{...buttonStyle, ...saveButtonStyle, opacity: newImage ? 1 : 0.5}}
                onClick={handleImageUpload}
                disabled={!newImage}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && (
        <div style={overlayStyle} onClick={() => setShowDetailsModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={modalTitleStyle}>Confirm Details</h2>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Location</label>
              <input
                type="text"
                placeholder="Where did you spot this bird?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={modalButtonsStyle}>
              <button
                style={{...buttonStyle, ...cancelButtonStyle}}
                onClick={() => {
                  setShowDetailsModal(false);
                  setShowModal(true);
                }}
              >
                Back
              </button>
              <button
                style={{...buttonStyle, ...saveButtonStyle}}
                onClick={handleSaveEntry}
              >
                Save Entry
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedEntry && (
        <div style={overlayStyle} onClick={() => setSelectedEntry(null)}>
          <div style={{...modalStyle, maxWidth: '600px'}} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              value={editedBirdName}
              onChange={(e) => setEditedBirdName(e.target.value)}
              style={birdNameInputStyle}
              placeholder="Bird name..."
            />

            <img
              src={selectedEntry.image}
              alt="Bird sighting"
              style={fullImageStyle}
            />

            <div style={formGroupStyle}>
              <label style={labelStyle}>Location</label>
              <input
                type="text"
                value={editedLocation}
                onChange={(e) => setEditedLocation(e.target.value)}
                style={inputStyle}
                placeholder="Location"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Notes</label>
              <textarea
                value={editedNotes}
                onChange={(e) => setEditedNotes(e.target.value)}
                style={textareaStyle}
                placeholder="Add your observations..."
              />
            </div>

            <div style={modalButtonsStyle}>
              <button
                onClick={() => {
                  const confirmDelete = window.confirm("Delete this entry?");
                  if (!confirmDelete) return;

                  setEntries(prev => prev.filter(e => e.id !== selectedEntry.id));
                  setSelectedEntry(null);
                }}
                style={{...buttonStyle, ...deleteButtonStyle}}
              >
                Delete
              </button>
              <div style={{display: 'flex', gap: '8px'}}>
                <button
                  onClick={() => setSelectedEntry(null)}
                  style={{...buttonStyle, ...cancelButtonStyle}}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const updatedEntry = { 
                      ...selectedEntry, 
                      notes: editedNotes,
                      birdName: editedBirdName,
                      location: editedLocation,
                      date: editedDate
                    };
                    setEntries(prev =>
                      prev.map(e =>
                        e.id === selectedEntry.id ? updatedEntry : e
                      )
                    );
                    setSelectedEntry(null);
                  }}
                  style={{...buttonStyle, ...saveButtonStyle}}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        style={fabStyle}
        onClick={() => {
          setSelectedEntry(null);
          setShowModal(true);
        }}
      >
        +
      </button>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  background: '#F8F6F3',
  padding: '32px 24px 80px',
  fontFamily: 'Georgia, "Times New Roman", serif'
};

const headerStyle = {
  textAlign: 'left',
  marginBottom: '32px',
  maxWidth: '1400px',
  margin: '0 auto 48px'
};

const titleStyle = {
  fontSize: '3.0rem',
  fontWeight: '400',
  color: '#2D5016',
  margin: '0 0 6px 0',
  letterSpacing: '0.5px',
  textAlign: 'center'
};

const subtitleStyle = {
  fontSize: '1.4rem',
  color: '#6B7B5E',
  margin: '0px',
  fontWeight: '400',
  textAlign: 'center'
};

const loadingStyle = {
  textAlign: 'center',
  color: '#2D5016',
  fontSize: '1.2rem',
  marginTop: '60px'
};

const emptyStateStyle = {
  textAlign: 'center',
  padding: '80px 20px',
  color: '#5A7C3E'
};

const emptyIconStyle = {
  width: "50%",
  height: "auto",
  marginBottom: '20px',
  opacity: 0.8
};

const emptyTextStyle = {
  fontSize: '1.3rem',
  fontWeight: '300',
  opacity: 0.9
};

const sortControlsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  gap: '12px',
  marginBottom: '28px',
  maxWidth: '1400px',
  margin: '0 auto 28px'
};

const sortLabelStyle = {
  fontSize: '0.95rem',
  color: '#5A7C3E',
  fontWeight: '500',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const sortButtonsStyle = {
  display: 'flex',
  gap: '8px',
  background: '#FFFFFF',
  padding: '4px',
  borderRadius: '4px',
  border: '1px solid #E5DFD5'
};

const sortButtonStyle = {
  padding: '8px 18px',
  borderRadius: '3px',
  border: 'none',
  fontSize: '0.85rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  background: 'transparent',
  color: '#666'
};

const activeSortButtonStyle = {
  background: '#3D5A29',
  color: '#FFFFFF'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '20px',
  maxWidth: '1400px',
  margin: '0 auto'
};

const cardStyle = {
  background: '#FFFFFF',
  borderRadius: '3px',
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease',
  position: 'relative',
  border: '1px solid #E5DFD5'
};

const imageWrapperStyle = {
  position: 'relative',
  width: '100%',
  paddingBottom: '75%',
  overflow: 'hidden'
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease'
};

const gradientOverlayStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
  pointerEvents: 'none'
};

const cardContentStyle = {
  padding: '14px'
};

const birdNameStyle = {
  fontSize: '1rem',
  color: '#2D5016',
  fontWeight: '600',
  marginBottom: '8px',
  fontFamily: 'Georgia, "Times New Roman", serif'
};

const locationStyle = {
  fontSize: '0.8rem',
  color: '#5A7C3E',
  fontWeight: '400',
  marginBottom: '6px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const previewNotesStyle = {
  fontSize: '0.85rem',
  color: '#666',
  lineHeight: '1.4',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const dateBadgeStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'rgba(255, 255, 255, 0.92)',
  padding: '4px 10px',
  borderRadius: '2px',
  fontSize: '0.7rem',
  fontWeight: '500',
  color: '#2D5016',
  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
  border: '1px solid rgba(45, 80, 22, 0.15)',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px'
};

const modalStyle = {
  background: '#FFFFFF',
  padding: '28px',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '480px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
  maxHeight: '90vh',
  overflowY: 'auto',
  border: '1px solid #DDD'
};

const modalTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '400',
  color: '#2D5016',
  margin: '0 0 20px 0',
  fontFamily: 'Georgia, "Times New Roman", serif'
};

const birdNameInputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '3px',
  border: '2px solid #3D5A29',
  fontSize: '1.3rem',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontWeight: '500',
  color: '#2D5016',
  outline: 'none',
  boxSizing: 'border-box',
  background: '#FFF',
  marginBottom: '20px'
};

const uploadAreaStyle = {
  marginBottom: '20px'
};

const fileInputStyle = {
  display: 'none'
};

const uploadLabelStyle = {
  display: 'block',
  cursor: 'pointer'
};

const uploadPlaceholderStyle = {
  border: '2px dashed #BBB',
  borderRadius: '4px',
  padding: '50px 20px',
  textAlign: 'center',
  color: '#888',
  fontSize: '0.95rem',
  transition: 'border-color 0.2s ease',
  background: '#FAFAFA'
};

const uploadIconStyle = {
  fontSize: '2.5rem',
  marginBottom: '10px'
};

const previewImageStyle = {
  width: '100%',
  borderRadius: '4px',
  display: 'block'
};

const formGroupStyle = {
  marginBottom: '20px'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '500',
  color: '#444',
  marginBottom: '6px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '3px',
  border: '1px solid #CCC',
  fontSize: '0.95rem',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'border-color 0.2s ease',
  outline: 'none',
  boxSizing: 'border-box',
  background: '#FFF'
};

const textareaStyle = {
  width: '100%',
  minHeight: '100px',
  padding: '10px 12px',
  borderRadius: '3px',
  border: '1px solid #CCC',
  fontSize: '0.95rem',
  resize: 'vertical',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'border-color 0.2s ease',
  outline: 'none',
  boxSizing: 'border-box',
  background: '#FFF',
  lineHeight: '1.5'
};

const modalButtonsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  marginTop: '24px'
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '3px',
  border: 'none',
  fontSize: '0.9rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
};

const saveButtonStyle = {
  background: '#3D5A29',
  color: '#FFFFFF'
};

const cancelButtonStyle = {
  background: '#E8E4DD',
  color: '#555'
};

const deleteButtonStyle = {
  background: '#A64D3F',
  color: '#FFFFFF'
};

const fullImageStyle = {
  width: '100%',
  borderRadius: '3px',
  marginBottom: '18px',
  display: 'block',
  border: '1px solid #DDD'
};

const fabStyle = {
  position: 'fixed',
  bottom: '28px',
  right: '28px',
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  border: 'none',
  background: '#3D5A29',
  color: '#FFFFFF',
  fontSize: '1.8rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '300'
};

export default App;